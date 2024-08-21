const { share, map } = rxjs.operators;
const { fromEvent, Observable, interval, Subject, multiCast } = rxjs;

const interval$ = interval(1000);

// const subject = new Subject();

// subject.subscribe(console.log);
// subject.next(1);

// subject.subscribe(console.log);

// subject.next(2);

// interval$.subscribe(subject);

// subject : multicast observable which emit values to all subscriptions
// behaviorSubject: same like subject but have initial value and emit last || initial value to all subscriptions
// replaySubject: emit numbers of values depend on how we initiate it
// asyncSubject: emit last value on complete
