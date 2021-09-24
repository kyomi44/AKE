class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        try:
            ans = nums.index(target)
        except ValueError:
            for i in range(len(nums)):
                if target < nums[i]:
                    ans = i
                    break
                else:
                    ans = len(nums)
        return ans