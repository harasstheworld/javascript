#include <bits/stdc++.h>

using namespace std;

int main() {
  
  ios::sync_with_stdio(0);
  cin.tie(0);

  int T;
  cin >> T;
  int arr[T];

  for (int i = 0; i < T; i++) {
    cin >> arr[i];
  }

  
  for (int i = 0; i < T; i++) {
  int even = 0, odd = 0;
    while (arr[i] != 0) {
      even += ((arr[i] % 10) % 2) == 0 ? 1 : 0;
      odd += ((arr[i] % 10) % 2) == 1 ? 1 : 0;
      arr[i] = arr[i] / 10;
    }
    cout << even << ' ' << odd << endl;
  }
  return 0;
}
