import set from "lodash/set";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";
import NavigationBar from "@/app/components/navigation";
import FooterSection from "../components/footer";

function transformMessages(messages: Record<string, unknown>) {
  const transformed: Record<string, unknown> = {};
  Object.entries(messages).forEach(([key, value]) => {
    set(transformed, key, value);
  });
  return transformed;
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}) {
  const resolvedParams = await params; 

  const { locale } = resolvedParams;

  const messages = transformMessages(await getMessages());

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <div className="overflow-x-hidden">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <NavigationBar />
        {children}
        <FooterSection />
      </NextIntlClientProvider>
    </div>
  );
}