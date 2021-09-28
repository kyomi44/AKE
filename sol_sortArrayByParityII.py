class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        
        for i in range(len(nums)):
            # odd index, even number
            if i % 2 == 1 and nums[i] % 2 == 0:
                x = i + 1
                while x <= len(nums)-1:
                    if nums[x] % 2 == 1:
                        nums[i], nums[x] = nums[x], nums[i]
                        break
                    x+=2
            # even index, odd number
            elif i % 2 == 0 and nums[i] % 2 == 1:
                x = i + 1
                while x <= len(nums)-1:
                    if nums[x] % 2 == 0:
                        nums[i], nums[x] = nums[x], nums[i]
                        break
                    x+=2
        return nums