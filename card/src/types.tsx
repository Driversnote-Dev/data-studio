import * as dscc from '@google/dscc';

export type ObjectFormat = dscc.ObjectFormat;
export type DSObjectRow = dscc.ObjectRow;

export interface ColorObject {
  color: string;
  opacity?: number;
}

export interface StyleItem {
  defaultValue?: string | ColorObject;
  value?: string;
}

export interface Style {
  title: StyleItem;
  [key: string]: StyleItem;
}

export type DataFormat = 'percentage' | 'values';
export type Alignment = 'left' | 'center';

export interface StyleObject<T = string, K = T> {
  defaultValue: T;
  value?: K;
}

export interface FieldData {
  id: string;
  name: string;
  type: string;
  concept: string;
}

export interface StyleData {
  title: StyleObject;
  measure: StyleObject;
  format: StyleObject<DataFormat>;
  alignment: StyleObject<Alignment>;
  positiveColor: StyleObject<string, ColorObject>;
  negativeColor: StyleObject<string, ColorObject>;
  fontColor: StyleObject<string, ColorObject>;
  debug: StyleObject<boolean>;
  isCurrency: StyleObject<boolean>;
  currencySymbol: StyleObject;
  isPlural: StyleObject<boolean>;
  maximumFractionDigits: StyleObject<number>;
  minimumFractionDigits: StyleObject<number>;
  valueType: StyleObject<string>;
  locale: StyleObject<string>;
  currency: StyleObject<string>;
  fontFamily: StyleObject<string>;
}

export interface DSData {
  tables: {
    DEFAULT: Array<{
      target: number[];
      actual: number[];
    }>;
  };
  style: StyleData;
  fields: {
    target: Array<FieldData>;
    actual: Array<FieldData>;
  };
  theme: Record<any, any>;
}

export interface Colors {
  positive: string;
  negative: string;
  primary: string;
}

export interface Theme {
  alignment: Alignment;
  colors: Colors;
}
