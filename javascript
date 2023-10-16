import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String sentence = scanner.nextLine();

        String[] words = sentence.split(" ");
        StringBuilder reversedSentence = new StringBuilder();

        for (String word : words) {
            StringBuilder reversedWord = new StringBuilder(word).reverse();
            reversedSentence.append(reversedWord).append(" ");
        }

        System.out.println("Reversed Sentence: " + reversedSentence.toString().trim());
    }
}


let numbers = [5, 2, 9, 1, 5, 6];

// Sorting the array in descending order
numbers.sort(function(a, b) {
    return b - a;
});

console.log("Sorted Array in Descending Order: " + numbers);


