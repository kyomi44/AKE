class Solution:
    def convert(self, s: str, numRows: int) -> str:

        ans = []
        step = 1
        reverse = True
        fin = ""
        
        for y in range(numRows):
            ans.append("")
        
        for i in range(len(s)):
            if step == 1 and reverse == 1:
                ans[(step-1)] += s[i]
                if(numRows != 1):
                    reverse = False
                    step+=1
            elif step == numRows and reverse == 0:
                ans[(step-1)] += s[i]
                reverse = True
                step-= 1
            elif reverse == 1:
                ans[(step-1)] += s[i] 
                step-= 1
            elif reverse == 0:
                ans[(step-1)] += s[i]
                step+= 1
        
        for x in range(numRows):
            fin += ans[x]

        
        return fin