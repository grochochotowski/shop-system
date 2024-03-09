import {useTranslation} from "react-i18next";

export default function Fallback() {

  const { t } = useTranslation("global")

  return (
    <div className="page-fallback">
      <h1>{t("main.loading")}</h1>
    </div>
  )
}