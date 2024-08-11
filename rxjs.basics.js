const { Observable, fromEvent, of, range, from, interval, time } = rxjs;
const {
  map,
  pluck,
  mapTo,
  filter,
  reduce,
  scan,
  tap,
  take,
  first,
  takeWhile,
  takeUntil,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} = rxjs.operators;

/* rxjs observable
 console.log("hello");
 const observer = {
   next: (value) => console.log("next", value),
   error: (error) => console.log(error),
   complete: () => console.log("complete"),
 };
 const observable = new Observable((sub) => {
   let count = 1;
   const interval = setInterval(() => {
     sub.next(count);
     sub.complete();
     count++;
   }, 1000);
   return () => clearInterval(interval);
 });
 console.log("before subscribing");
 observable.subscribe(observer);
 console.log("after subscribing");
*/

/* creation operators

 const source$ = fromEvent(document, "click");
 source$.subscribe(observer);
 const ofOperator = of(1, 2, 3, 4);
 ofOperator.pipe(map((x) => x + 1)).subscribe(observer);

 of(1, 2, 3, 4, 5, 6, 7, 8)
   .pipe(mapTo("nothing to show"))
   .subscribe((res) => console.log(res));
 fromEvent(document, "keyup")
   .pipe(
     filter((e) => e.keyCode == 71),
     pluck("keyCode")
   )
   .subscribe((response) => {
     console.log(response);
   });
 let numbers = [1, 2, 3, 4, 5];
 let nums$ = from(numbers).pipe(scan((acc, n) => acc + n, 0));
 nums$.subscribe(console.log);

 */

/* Operators

 counter down
 let counter$ = interval(1000);
 let countRef = document.querySelector(".count");
 let messageRef = document.querySelector(".message");
 counter$
   .pipe(
     mapTo(-1),
     scan((acc, curr) => acc + curr, 10),
     tap(console.log),
     takeWhile((val) => val >= 0, false)
    take(10)
    first((val) => val === 0)
    we can use takeUntil too
   )
   .subscribe(
     (val) => {
       countRef.innerHTML = val;
       if (val === 0) {
         messageRef.innerHTML = "Completed!";
       }
     },
     null,
     () => console.log("completed!")
   );
 we can use first
 first can work as take for one time  and also can work as a filter operator
 take until operator
t interval$ = interval(1000);
t clickEvent = fromEvent(document, "click");
terval$
.pipe(
  tap((val) => console.log(val)),
  takeUntil(clickEvent),
  mapTo("trigger value")
)
.subscribe(console.log);

const nums$ = from([1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8]);

nums$
  .pipe(distinctUntilChanged((prev, cur) => prev == cur))
  .subscribe(console.log);
*/

/* Time operators


*/
