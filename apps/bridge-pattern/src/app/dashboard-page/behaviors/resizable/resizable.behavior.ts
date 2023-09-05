import { InjectionToken } from '@angular/core';
import { WidgetPosition } from '../base.behavior';

export interface ResizeStrategy {
  minHeight: number;
  maxHeight: number;
  minWidth: number;
  maxWidth: number;
  increaseHeight(position: WidgetPosition): void;
  increaseWidth(position: WidgetPosition): void;
  decreaseHeight(position: WidgetPosition): void;
  decreaseWidth(position: WidgetPosition): void;
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

  public increaseHeight(position: WidgetPosition): void {
    position.height = Math.min(this.maxHeight, position.height + 1);
  }

  public increaseWidth(position: WidgetPosition): void {
    position.width = Math.min(this.maxWidth, position.width + 1);
  }

  public decreaseHeight(position: WidgetPosition): void {
    position.height = Math.max(this.minHeight, position.height - 1);
  }

  public decreaseWidth(position: WidgetPosition): void {
    position.width = Math.max(this.minWidth, position.width - 1);
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
    public readonly maxHeight: number = 4,
    public readonly minWidth: number = 1,
    public readonly maxWidth: number = 4
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
