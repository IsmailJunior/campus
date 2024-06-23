import type {ReactNode} from 'react';

export type ProvidersType = {
	children: ReactNode;
	locale: string;
	namespaces: any[];
	resources: string;
}