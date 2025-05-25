// 8. Operator Precedence
// Objective: Explore how Java evaluates expressions.
public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2;
        System.out.println("Result of 10 + 5 * 2 = " + result); // 5 * 2 = 10, then 10 + 10 = 20

        int result2 = (10 + 5) * 2;
        System.out.println("Result of (10 + 5) * 2 = " + result2); // (10 + 5) = 15, then 15 * 2 = 30
    }
}