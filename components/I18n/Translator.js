import { useTranslation } from 'react-i18next'
// Importamos o hook

const Translator = ({ path }) => {
  const { t } = useTranslation() // Função que traduz

  return t(path)
}

export default Translator