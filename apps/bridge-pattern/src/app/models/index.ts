export type WidgetType =
  | 'widget-one'
  | 'widget-two'
  | 'widget-three'
  | 'widget-four';

export interface Position {
  height: number;
  width: number;
}

export interface Widget {
  type: WidgetType;
  label: string;
  position: Position;
  data: any;
}
