import { i18nRouter } from 'next-i18n-router';
import {i18nConfig} from '@/app/_i18n/i18nConfig';
import type { NextRequest } from 'next/server';

export function middleware (request: NextRequest)
{
	return i18nRouter(request, i18nConfig)
}

export const config = {
	matcher: '/((?!api|static|.*\\..*|_next).*)'
}