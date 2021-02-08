#### Rainwater trapping problem
A famous interview question often asked by google

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/UQnvWMLD6M0/0.jpg)](https://www.youtube.com/watch?v=UQnvWMLD6M0)

Here is the solution discussed in the question:

``` javascript
var trap = function(height) {
    const maxLeft = [];
    const maxRight = [];
    const size = height.length;
    
    maxLeft[0] = height[0];
    for (let i = 1; i < size; i++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    
    maxRight[size - 1] = height[size - 1];
    for (let i = size - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    
    let ans = 0;
    for (let i = 1; i < size - 1; i++) {
        ans += Math.min(maxRight[i], maxLeft[i]) - height[i];
    }
    
    return ans;
};
```

Here is the alternate solution that does not require the max left and right arrays:

``` c++
int trap(vector<int>& height)
{
    int left = 0, right = height.size() - 1;
    int ans = 0;
    int left_max = 0, right_max = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
            ++left;
        }
        else {
            height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
            --right;
        }
    }
    return ans;
}
```