import { ExternalIdentifiers, TextContainer } from './types';

export const formatExternalIds = (externalIds: ExternalIdentifiers): string => {
  const externalId = externalIds.externalIdentifier;

  if (!Array.isArray(externalId)) {
    return `${externalId.otherType}: ${externalId.value}`
  } else {
    let arrayString = '';

    externalId.forEach(id => {
      arrayString.concat(`${id.otherType}: ${id.value} \n`)
    })
    return arrayString;
  }
}

export const getEnglishText = (textContainer: TextContainer): string => {
  const text = textContainer.text
  if (!Array.isArray(text)) {
    return text._content;
  } else { // prefer English
    const matchingNode = text.find(
      (node) => node._attributes.language === 'en'
    );
    return matchingNode?._content || text[0]._content;
  }
};
