class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        counter = 0
        for x in range(len(nums)):
            if nums[x] == val:
                counter +=1
        ans = len(nums) - counter
        
        for i in range(counter):
            nums.remove(val)
            

        return ans
    