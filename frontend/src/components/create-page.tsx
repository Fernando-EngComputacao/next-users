import Head from "next/head";
import { useRouter } from "next/router";
import { NextPage } from "next/types";

export interface LayoutProps {
  layout?: React.ReactNode;
  isPublic?: boolean;
}

export interface CreatePageProps<TPageProps extends object> extends LayoutProps {
  title?: string;
  renderComponent: React.FC<PageProps & TPageProps>;
}

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & LayoutProps;

export interface NavigateOptions {
  replace?: boolean;
}

export interface PageProps {
  /* eslint-disable-next-line */
  query: Record<string, any>;
  locale?: string;
}

export const createPage = <TPageProps extends object>(props: CreatePageProps<TPageProps>) => {
  const { title, layout, isPublic, renderComponent: PageComponent } = props;

  const Page: NextPageWithLayout<TPageProps> = (innerProps) => {
    const router = useRouter();

    return (
      <>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <title>{title}</title>
        </Head>

        <PageComponent query={router.query} locale={router.locale} {...innerProps} />
      </>
    );
  };

  Page.layout = layout;
  Page.isPublic = isPublic;

  return Page;
};
