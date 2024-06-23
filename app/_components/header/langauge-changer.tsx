"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useToast } from "@/app/_hooks/use-toast.hooks";
import { i18nConfig } from "@/app/_i18n/i18nConfig";
export default function LanguageChanger ()
{
	const { toast } = useToast();
	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const currentPathname = usePathname();
	function handleChange ( e: any )
	{
		const newLocale = e.target.value;

		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime( date.getTime() + days * 24 * 60 * 60 * 1000 );
		const expires = "; expires=" + date.toUTCString();
		document.cookie = `NEXT_LOCALE=${ newLocale };expires=${ expires };path=/`;

		// redirect to the new locale path
		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.prefixDefault
		)
		{
			router.push( "/" + newLocale + currentPathname );
		} else
		{
			router.push(
				currentPathname.replace( `/${ currentLocale }`, `/${ newLocale }` )
			);
		}
		router.refresh();
		setTimeout( () =>
		{
			if ( currentLocale === 'ar' )
			{
				toast( {
					title: "You have changed the language to english"
				} );
			} else
			{
				toast( {
					title: "لقد قمت بغيير اللغة الى العربية"
				} );
			}
		}, 500 );
	}

	return (
		<select className="mx-3" onChange={ handleChange } value={ currentLocale }>
			<option value="en">English</option>
			<option value="ar">Arabic</option>
		</select>
	);
}