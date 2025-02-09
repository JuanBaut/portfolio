"use client";

import { usePathname } from "i18n/routing";
import { LanguagesIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "./ui/button";

type Props = {};

export default function LocaleSwitch({}: Props) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const handleLocaleChange = () => {
    let newLocale: string;
    if (locale === "en") {
      newLocale = "es";
    } else {
      newLocale = "en";
    }

    startTransition(() => {
      router.push(`/${newLocale}${pathname}`);
      router.refresh();
    });
  };

  return (
    <Button
      className="p-2"
      onClick={handleLocaleChange}
      aria-label="Switch language"
      disabled={isPending}
      variant={"ghost"}
    >
      <span className="font-mono uppercase">{locale}</span>
      <LanguagesIcon />
    </Button>
  );
}
