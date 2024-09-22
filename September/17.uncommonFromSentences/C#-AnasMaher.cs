public class Solution {
    public string[] UncommonFromSentences(string s1, string s2) {
        string[] a = s1.Split(' '), b = s2.Split(' ');

        Dictionary<string, int> f = new Dictionary<string, int>();
        foreach (var i in a)
        {
            if (!f.ContainsKey(i)) f[i] = 1;
            else f[i]++;
        }
        foreach (var i in b)
        {
            if (!f.ContainsKey(i)) f[i] = 1;
            else f[i]++;
        }

        List<string> ans = new List<string>();
        foreach(var i in f)
        {
            if(i.Value == 1) ans.Add(i.Key);
        }

        return ans.ToArray();
    }
}