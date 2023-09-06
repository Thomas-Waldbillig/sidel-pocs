import { InjectionToken } from '@angular/core';
import { WidgetPosition } from './base.behavior';

export interface ResizeStrategy {
  minHeight: number;
  maxHeight: number;
  minWidth: number;
  maxWidth: number;
  increaseHeight(position: WidgetPosition): WidgetPosition;
  increaseWidth(position: WidgetPosition): WidgetPosition;
  decreaseHeight(position: WidgetPosition): WidgetPosition;
  decreaseWidth(position: WidgetPosition): WidgetPosition;
}

//  █████╗ ██████╗ ███████╗████████╗██████╗  █████╗  ██████╗████████╗
// ██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝
// ███████║██████╔╝███████╗   ██║   ██████╔╝███████║██║        ██║
// ██╔══██║██╔══██╗╚════██║   ██║   ██╔══██╗██╔══██║██║        ██║
// ██║  ██║██████╔╝███████║   ██║   ██║  ██║██║  ██║╚██████╗   ██║
// ╚═╝  ╚═╝╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝

abstract class AbstractResizeStrategy implements ResizeStrategy {
  public abstract readonly minHeight: number;
  public abstract readonly maxHeight: number;
  public abstract readonly minWidth: number;
  public abstract readonly maxWidth: number;

  public increaseHeight({ height, width }: WidgetPosition): WidgetPosition {
    return { height: Math.min(this.maxHeight, height + 1), width };
  }

  public increaseWidth({ height, width }: WidgetPosition): WidgetPosition {
    return { height, width: Math.min(this.maxWidth, width + 1) };
  }

  public decreaseHeight({ height, width }: WidgetPosition): WidgetPosition {
    return { height: Math.max(this.minHeight, height - 1), width };
  }

  public decreaseWidth({ height, width }: WidgetPosition): WidgetPosition {
    return { height, width: Math.max(this.minWidth, width - 1) };
  }
}

// ██████╗ ███████╗███████╗ █████╗ ██╗   ██╗██╗  ████████╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║  ╚══██╔══╝
// ██║  ██║█████╗  █████╗  ███████║██║   ██║██║     ██║
// ██║  ██║██╔══╝  ██╔══╝  ██╔══██║██║   ██║██║     ██║
// ██████╔╝███████╗██║     ██║  ██║╚██████╔╝███████╗██║
// ╚═════╝ ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝

export class DefaultResizeStrategy extends AbstractResizeStrategy {
  constructor(
    public readonly minHeight: number = 1,
    public readonly maxHeight: number = 6,
    public readonly minWidth: number = 1,
    public readonly maxWidth: number = 6
  ) {
    super();
  }
}

// ███████╗███╗   ███╗ █████╗ ██╗     ██╗
// ██╔════╝████╗ ████║██╔══██╗██║     ██║
// ███████╗██╔████╔██║███████║██║     ██║
// ╚════██║██║╚██╔╝██║██╔══██║██║     ██║
// ███████║██║ ╚═╝ ██║██║  ██║███████╗███████╗
// ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝

export class SmallWidgetResizeStrategy extends AbstractResizeStrategy {
  public readonly minHeight = 1;
  public readonly maxHeight = 2;
  public readonly minWidth = 1;
  public readonly maxWidth = 2;
}

// ████████╗ ██████╗ ██╗  ██╗███████╗███╗   ██╗███████╗
// ╚══██╔══╝██╔═══██╗██║ ██╔╝██╔════╝████╗  ██║██╔════╝
//    ██║   ██║   ██║█████╔╝ █████╗  ██╔██╗ ██║███████╗
//    ██║   ██║   ██║██╔═██╗ ██╔══╝  ██║╚██╗██║╚════██║
//    ██║   ╚██████╔╝██║  ██╗███████╗██║ ╚████║███████║
//    ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝

export interface ResizableWidget {
  resizeStrategy: ResizeStrategy;
}

export const RESIZABLE_WIDGET = new InjectionToken<ResizableWidget>(
  'RESIZE_STRATEGY'
);
