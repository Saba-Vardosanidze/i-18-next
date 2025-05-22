import LocaleSwitcher from "@/features/i18n/components/LocalSwitcher";
import {useTranslations} from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("about")}</p>
      <LocaleSwitcher />
    </div>
  );
};

export default HomePage;
