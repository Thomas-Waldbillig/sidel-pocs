import { BehaviorSubject, Observable } from 'rxjs';

export type RefreshType = 'spinner' | 'skeleton' | 'progressBar';

export interface RefreshStrategy {
  type: RefreshType;
  isLoading$: Observable<boolean>;
  refresh(): void;
}

//  █████╗ ██████╗ ███████╗████████╗██████╗  █████╗  ██████╗████████╗
// ██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝
// ███████║██████╔╝███████╗   ██║   ██████╔╝███████║██║        ██║
// ██╔══██║██╔══██╗╚════██║   ██║   ██╔══██╗██╔══██║██║        ██║
// ██║  ██║██████╔╝███████║   ██║   ██║  ██║██║  ██║╚██████╗   ██║
// ╚═╝  ╚═╝╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═╝

abstract class AbstractRefreshStrategy implements RefreshStrategy {
  protected readonly isLoadingSubject = new BehaviorSubject<boolean>(false);
  public abstract type: RefreshType;
  public isLoading$ = this.isLoadingSubject.asObservable();

  public refresh(): void {
    console.log('refreshing');
    this.isLoadingSubject.next(true);

    setTimeout(() => {
      this.isLoadingSubject.next(false);
    }, Math.floor(Math.random() * 3000));
  }
}

// ██████╗ ███████╗███████╗ █████╗ ██╗   ██╗██╗  ████████╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║  ╚══██╔══╝
// ██║  ██║█████╗  █████╗  ███████║██║   ██║██║     ██║
// ██║  ██║██╔══╝  ██╔══╝  ██╔══██║██║   ██║██║     ██║
// ██████╔╝███████╗██║     ██║  ██║╚██████╔╝███████╗██║
// ╚═════╝ ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝

export class DefaultRefreshStrategy extends AbstractRefreshStrategy {
  public override type: RefreshType = 'spinner';
}

// ███████╗██╗      ██████╗ ██╗    ██╗
// ██╔════╝██║     ██╔═══██╗██║    ██║
// ███████╗██║     ██║   ██║██║ █╗ ██║
// ╚════██║██║     ██║   ██║██║███╗██║
// ███████║███████╗╚██████╔╝╚███╔███╔╝
// ╚══════╝╚══════╝ ╚═════╝  ╚══╝╚══╝

export class SlowRefreshStrategy extends AbstractRefreshStrategy {
  public override type: RefreshType = 'progressBar';

  public override refresh(): void {
    console.log('refreshing');
    this.isLoadingSubject.next(true);
    setTimeout(
      () => this.isLoadingSubject.next(false),
      5000 + Math.floor(Math.random() * 5000)
    );
  }
}
