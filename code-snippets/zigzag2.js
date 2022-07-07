// Javascript program to print string
// obtained by concatenation
// of different rows of
// Zig-Zag fashion
 
// Prints concatenation
    // of all rows of str's
    // Zig-Zag fashion
    function printZigZagConcat(str,n)
    {
        // Corner Case (Only one row)
            if (n == 1)
            {
                console.log(str);
                return;
            }
            let str1 = str.split("");
      
            // Find length of string
            let len = str.length;
      
            // Create an array of
            // strings for all n rows
            let arr = new Array(n);
            for(let i=0;i<n;i++)
            {
                arr[i]="";
            }
             
      
            // Initialize index for
            // array of strings arr[]
            let row = 0;
            let down = true; // True if we are moving
            // down in rows, else false
      
            // Traverse through
            // given string
            for (let i = 0; i < len; ++i)
            {
                // append current character
                // to current row
                arr[row] += (str1[i]);
      
                // If last row is reached,
                // change direction to 'up'
                if (row == n - 1)
                {
                    down = false;
                }
                  
                // If 1st row is reached,
                // change direction to 'down'
                else if (row == 0)
                {
                    down = true;
                }
      
                // If direction is down,
                // increment, else decrement
                if (down)
                {
                    row++;
                }
                else
                {
                    row--;
                }
            }
      
            // Print concatenation
            // of all rows
            for (let i = 0; i < n; ++i)
            {
                console.log(arr[i]);
            }
    }
     
    // Driver Code
    let str = "MICROSOFT";
    let n = 3;
    printZigZagConcat(str, n);
     
    // This code is contributed by ab2127