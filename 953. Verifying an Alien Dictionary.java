class Solution {
    public int[] char_map;
    public boolean isAlienSorted(String[] words, String order) {
        char_map = new int[26];
        for(int i=0; i<order.length();i++){
            char_map[order.charAt(i) - 'a'] = i;
        }
        for(int i=1; i<words.length;i++){
            if(compare(words[i-1],words[i]) > 0){
                return false;
            }
        }
        return true;
    }
    public int compare(String str1, String str2){
        int i=0;
        int j=0;
        int char_compare=0;
        while(i<str1.length() && j<str2.length() && char_compare == 0){
            char_compare = char_map[str1.charAt(i) - 'a'] - char_map[str2.charAt(j) - 'a'];
            i++;
            j++;
        }
        if(char_compare == 0){
            return str1.length() - str2.length();
        }else{
            return char_compare;
        }
    }
}