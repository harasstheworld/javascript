#include <algorithm>
#include <bits/extc++.h>
using namespace std;

int main() {
  int n;
  cin >> n;
  vector<int> vt(n);
  for (int i = 0; i < n; i++) {
    cin >> vt[i];
  }

  sort(vt.begin(), vt.end());
  for (auto u : vt) {
    cout << u << ' ' << endl;
  }


  return 0;
}
