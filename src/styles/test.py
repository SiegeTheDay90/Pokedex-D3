class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        holder = []
        _max = -float('inf')
        if len(nums) == 1:
            return nums[0]

        for i in range (len(nums)):
            for j in range(i+1,len(nums)+1):
                _sum = sum(nums[i:j])
                if _sum > _max:
                    _max = _sum
                else:
                    continue
        
        return _max






    def maxSubArray_naive(self, nums: List[int]) -> int:
        holder = []
        _max = -float('inf')
        if len(nums) == 1:
            return nums[0]

        for i in range (len(nums)):
            for j in range(i+1,len(nums)+1):
                _sum = sum(nums[i:j])
                if _sum > _max:
                    _max = _sum
        
        return _max