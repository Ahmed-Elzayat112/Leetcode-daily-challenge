public class Solution {
    public string LargestNumber(int[] a) {
        string[] b = new string[a.Length];
        for(int i = 0; i < a.Length; i++) b[i] = a[i].ToString();

        Array.Sort(b, (x, y) => (y + x).CompareTo(x + y));

        if (b[0] == "0") return "0";
        else return string.Concat(b);
    }
}