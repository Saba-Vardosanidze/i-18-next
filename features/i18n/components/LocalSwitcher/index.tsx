import {useLocale} from "next-intl";
import LocaleSwitcherSelect from "../LocalSwitcherSelect";

const LocaleSwitcher = () => {
  const locale = useLocale();
  return (
    <div className="flex itemsCenter">
      <LocaleSwitcherSelect
        defaultValue={locale}
        label="Select a locale"
      ></LocaleSwitcherSelect>
    </div>
  );
};

export default LocaleSwitcher;
