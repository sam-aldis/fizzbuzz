fn main() {
    for i in 1..102 {
        fizzbuzz(&i);
    }
}
fn fizzbuzz(n : &i32) {
    match (n%3, n%5) {
        (0, 0) => println!("fizbuzz {}", n),
        (0,_) => println!("fizz {}", n),
        (_,0) => println!("buzz {}", n),
        _ => println!("{}",n),
    };
}
