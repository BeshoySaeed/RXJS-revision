const { share, map } = rxjs.operators;
const { fromEvent, Observable, interval, Subject, multiCast } = rxjs;

const interval$ = interval(1000);

// const subject = new Subject();

// subject.subscribe(console.log);
// subject.next(1);

// subject.subscribe(console.log);

// subject.next(2);

// interval$.subscribe(subject);
