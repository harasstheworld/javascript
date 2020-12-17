#include <bits/stdc++.h>
using namespace std;

int main() {
  
  int n, sum = 0;
  cin >> n;
  int myArr[n];

  for (int i = 0; i < n; i++) {
    cin >> myArr[i];
  }

  for (int i = 1; i < n - 1; i++) {
    if ((myArr[i - 1] < myArr[i]) && (myArr[i] > myArr[i + 1])) {
      sum += myArr[i];
      // cout << myArr[i] << endl;
    }
  }

  if (myArr[0] > myArr[1]) sum += myArr[0];
  if (myArr[n - 1] > myArr[n - 2]) sum += myArr[n - 1];

  cout << sum << endl;

  return 0;
}
