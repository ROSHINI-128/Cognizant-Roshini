import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> studentMap = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter student ID and name (type -1 to stop):");
        while (true) {
            System.out.print("ID: ");
            int id = scanner.nextInt();
            if (id == -1) break;
            scanner.nextLine(); // consume newline
            System.out.print("Name: ");
            String name = scanner.nextLine();
            studentMap.put(id, name);
        }

        System.out.print("Enter an ID to search: ");
        int searchId = scanner.nextInt();
        String result = studentMap.get(searchId);
        System.out.println("Student Name: " + (result != null ? result : "Not Found"));
    }
}