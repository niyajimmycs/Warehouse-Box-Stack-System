import java.util.Scanner;
import java.util.Stack;

/**
 * Warehouse Box Loading and Unloading System using Stack.
 * Demonstrates the LIFO (Last In, First Out) principle.
 */
public class WarehouseBoxSystem {
    private static final Stack<String> boxes = new Stack<>();
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int choice;
        do {
            showMenu();
            choice = readInteger("Enter your choice: ");
            switch (choice) {
                case 1: loadBox(); break;
                case 2: unloadBox(); break;
                case 3: peekBox(); break;
                case 4: displayBoxes(); break;
                case 5:
                    System.out.println(boxes.isEmpty()
                            ? "The warehouse is empty."
                            : "Warehouse contains " + boxes.size() + " box(es).");
                    break;
                case 6: System.out.println("Thank you for using the system."); break;
                default: System.out.println("Invalid choice. Please choose 1-6.");
            }
            System.out.println();
        } while (choice != 6);
        scanner.close();
    }

    private static void showMenu() {
        System.out.println("========================================");
        System.out.println(" WAREHOUSE BOX LOADING AND UNLOADING");
        System.out.println("          SYSTEM USING STACK");
        System.out.println("========================================");
        System.out.println("1. Load a box (Push)");
        System.out.println("2. Unload top box (Pop)");
        System.out.println("3. View top box (Peek)");
        System.out.println("4. Display all boxes");
        System.out.println("5. Check warehouse status");
        System.out.println("6. Exit");
    }

    private static void loadBox() {
        System.out.print("Enter box ID or name: ");
        String name = scanner.nextLine().trim();
        if (name.isEmpty()) {
            System.out.println("Box ID or name cannot be empty.");
            return;
        }
        boxes.push(name);
        System.out.println("Box '" + name + "' loaded successfully.");
    }

    private static void unloadBox() {
        if (boxes.isEmpty()) {
            System.out.println("Warehouse is empty. No box to unload.");
            return;
        }
        System.out.println("Box '" + boxes.pop() + "' unloaded successfully.");
    }

    private static void peekBox() {
        if (boxes.isEmpty()) {
            System.out.println("Warehouse is empty. No top box.");
            return;
        }
        System.out.println("Top box: " + boxes.peek());
    }

    private static void displayBoxes() {
        if (boxes.isEmpty()) {
            System.out.println("Warehouse is empty.");
            return;
        }
        System.out.println("Stored boxes (top to bottom):");
        for (int i = boxes.size() - 1; i >= 0; i--) {
            System.out.println("- " + boxes.get(i));
        }
    }

    private static int readInteger(String prompt) {
        while (true) {
            System.out.print(prompt);
            try {
                return Integer.parseInt(scanner.nextLine().trim());
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid whole number.");
            }
        }
    }
}
