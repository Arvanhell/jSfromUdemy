/*
//*                 Generators 
        Regular function return only one, single value (or nothing)
    Generators can return ('yield') multiple values, one after another on demand.
    They work great with iterables, allowing to create data stram with ease.

                //* Generator functions
        TO create a generator, we need a special syntax cotruct:

//*                 function *  , co called 'generator function'

            function* generateSequence() {
                yield 1;
                yield 2;
                yield 3;
            }
    
        Generator function behave differently from regular, when such function
        is called it doesn't run its code. Instead it returns a special object, 
        called ;
//*                 generator object 
            to manage the execution.

            let generator = generateSequence()
            alert(generator);  [Object Generator]


    The function code execution hasn't started yet:

    The main method of generator is 

    //*                  next()
    When called, it runs the execution until the nearest 
                    yield <value> statement ( value can be omitted, then it's undefined).
    Then the function execution pauses, and the yielded value is returned to the outer code.
            The result of next() is always an object with 
//*      Two Propertes:
//*             -value : the yielded value
//*             -done : true if the function code has finished othervise false

For instance here we create the generator and get it firs yielded value:



            function* generateSequence () {
                yield 1;
                yield 2;
                return 3;
            }
            let generator = generateSequence();
            let one = generator.next();
            alert(JSON.tringify(one)) ;    //{ value: 1, done: false}

            let two = generator.next();
            alert(JSON.stringify(two)) ;   //{ value: 2, done: false}

    And if call it a third time the execution reaches the return statements that finishes the function
            let three = generator.next();
            alert(JSON.stringify(three)) ;  // {value: 3, done: true}

                    Now the generator is done. We should see it from done. true and process value : 3 at the final result.

                    New call to generator .next() don't make sense any more. If we do them the return the same object {done: true}


    //*    We can loop over their values using for... of 
                function* generatorSequence() {
                    yield 1;
                    yield 2;
                    return 3;
                }
            let generator = generatorSequence();
                        for(let value of generator){
                            alert(value); // 1, then 2 but never show 3

                        }
            It is because for.. of ignores the last value when done : true. So if we want all result to be shown by for... of, we must returns them with yield instead return
                            //* yield 3;

*/

                                function* generateSequence() {
                                    yield 1;
                                    yield 2;
                                    yield 3;
                                }
                                let generator = generateSequence();
                                    for (let value of generator){
                                        alert (value);  // 1,2 and 3
                                    }

    /*
    As generator are iterable we can call all related functionality, e.g the spread syntax 
    //*     ... 
    */

                                function* generateSequence() {
                                    yield 1;
                                    yield 2;
                                    yield 3;
                                }
                                let sequence = [0, generateSequence()];
                                alert (sequence); // 0,1,2,3

    /*
    Inside the generator function fibonacci sequence is defined by the realtion 

    //*                         Xn = Xn - 1 + Xn - 2
    The first few numbrs of the series are 
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
                                Input: callCount = 5
                                Output: [0,1,1,2,3]
                                Explanation:
                    const gen = fibGenerator();
                    gen.next().value;       // 0
                    gen.next().value;       // 1
                    gen.next().value;       // 1
                    gen.next().value;       // 2
                    gen.next().value;       // 3


                 Example 2
                 
                 Input: callCaount = 0
                 output: []
                 explanation
                 gen,next() is never called so no output....
                 

    Constraints:

                0 <= callCount <= 50
                solution
                Aprouch

        THe code you provided is an eexample of fibonaci number generator implemented by using generator function 

        The generator function 
                                fibGenerator generates an infinite sequence of fibonacci numbers

        There is an explanation of how the code works:
        1. The function is defined as a generator functionusing the function* syntax . This allows  us to create an iterator object that can be used to generate Fibinacci numbers.
    */

                                let fibGenerator = function*() {
                                    let a = 0;
                                    let b = 1;
                                        while ( true) {
                                            yield a;
                                            let temp = a;
                                            a = b;
                                            b += temp;
                                        }
                                };

                                const gen = fibGenerator();
                                gen.next().value; // 0
                                gen.next().value; // 1


    /*
    Inside the generator function, two variables a and b are initialized to 0 and 1 respectively.
    these variables represent the current and next Fibonacci numbers in the sequence.

    The while ( true) loop ensures that generator keeps yielding Fibonacci numbers indefintely.

    Inside the loop the current Fiboncci number a is yielded using the yield keyword.

    Then a temporary variable temp is used to store the value of a

    The value of a is updated to b which represents the next Fibonacci number in sequence.

    The value of b is updated by adding temp to it, which calculates the next Fibonacci number.
    The loop continues and the process repeats with the updated values of a and b.
    */


/*
Fibonacci without generator look like this

function fibonacciLoop (n){
    if (n === 0) {return []}
    if (n === 1) {return [0]}
        const sequence = [0, 1];
        for (let i = 1; i <= n - 2; i++){
            sequence.push(sequence[i - 1] + sequence[i]);
        }
        return sequence;
}
*/