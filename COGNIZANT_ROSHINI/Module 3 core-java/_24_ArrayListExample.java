import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String name;

        System.out.println("Enter student names (type 'exit' to stop):");
        while (true) {
            name = scanner.nextLine();
            if (name.equalsIgnoreCase("exit")) break;
            students.add(name);
        }

        System.out.println("Student names:");
        for (String student : students) {
            System.out.println(student);
        }
    }
}