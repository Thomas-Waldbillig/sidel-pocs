import { BaseWidget, WidgetType } from '../behaviors';

export const widgetData: (BaseWidget & { type: WidgetType })[] = [
  {
    type: 'widget-one',
    label: 'label 01',
    data: { value: 1 },
    position: { height: 1, width: 1 },
  },
  {
    type: 'widget-four',
    label: 'label 02',
    data: { value: 2 },
    position: { height: 1, width: 2 },
  },
  {
    type: 'widget-three',
    label: 'label 03',
    data: { value: 3 },
    position: { height: 1, width: 2 },
  },
  {
    type: 'widget-two',
    label: 'label 04',
    data: { value: 4 },
    position: { height: 1, width: 3 },
  },
  {
    type: 'widget-two',
    label: 'label 05',
    data: { value: 5 },
    position: { height: 2, width: 1 },
  },
  {
    type: 'widget-four',
    label: 'label 06',
    data: { value: 6 },
    position: { height: 2, width: 2 },
  },
  {
    type: 'widget-one',
    label: 'label 07',
    data: { value: 7 },
    position: { height: 2, width: 2 },
  },
  {
    type: 'widget-two',
    label: 'label 08',
    data: { value: 8 },
    position: { height: 2, width: 3 },
  },
  {
    type: 'widget-three',
    label: 'label 09',
    data: { value: 9 },
    position: { height: 3, width: 1 },
  },
  {
    type: 'widget-three',
    label: 'label 10',
    data: { value: 10 },
    position: { height: 3, width: 2 },
  },
  {
    type: 'widget-one',
    label: 'label 11',
    data: { value: 11 },
    position: { height: 3, width: 2 },
  },
  {
    type: 'widget-four',
    label: 'label 12',
    data: { value: 12 },
    position: { height: 3, width: 3 },
  },
];
