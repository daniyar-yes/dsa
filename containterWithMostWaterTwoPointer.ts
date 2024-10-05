function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length - 1;
    let currentMaxArea: number = 0;
    let currentArea: number;

    while (left < right) {
        if (height[left] < height[right]) {
            currentArea = height[left] * (right - left);
            left++;
        } else {
            currentArea = height[right] * (right - left);
            right--;
        }
        if (currentArea > currentMaxArea) 
        {currentMaxArea = currentArea
        }
        
    }

    return currentMaxArea;
    
};