import { OptionsV2, parseString } from 'xml2js';
import { firstCharLowerCase } from 'xml2js/lib/processors';

import { ElectionData } from './types';

const parserConfig: OptionsV2 = {
  tagNameProcessors: [firstCharLowerCase],
  attrNameProcessors: [firstCharLowerCase],
  attrkey: '_attributes',
  charkey: '_content',
  explicitArray: false
};

type ParserCallbackFn = (data: ElectionData) => void;

const parseElectionData = (rawXml: string, setData: ParserCallbackFn): void => {
  parseString(rawXml, parserConfig, (error, result) => {
    setData(result.vipObject as ElectionData);
  });
};

export default parseElectionData;
