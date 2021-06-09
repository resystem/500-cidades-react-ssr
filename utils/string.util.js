export const normalizeString = (str) => {
  if (!str) return '';
    var lowercase = str.toLowerCase();

    lowercase = lowercase.replace(new RegExp("\\s", 'g'),"");
    lowercase = lowercase.replace(new RegExp("[àáâãäå]", 'g'),"a");
    lowercase = lowercase.replace(new RegExp("æ", 'g'),"ae");
    lowercase = lowercase.replace(new RegExp("ç", 'g'),"c");
    lowercase = lowercase.replace(new RegExp("[èéêëẽ]", 'g'),"e");
    lowercase = lowercase.replace(new RegExp("[ìíîï]", 'g'),"i");
    lowercase = lowercase.replace(new RegExp("ñ", 'g'),"n");                            
    lowercase = lowercase.replace(new RegExp("[òóôõö]", 'g'),"o");
    lowercase = lowercase.replace(new RegExp("œ", 'g'),"oe");
    lowercase = lowercase.replace(new RegExp("[ùúûü]", 'g'),"u");
    lowercase = lowercase.replace(new RegExp("[ýÿ]", 'g'),"y");
    lowercase = lowercase.replace(new RegExp("\\W", 'g'),"");
    return lowercase;
};
