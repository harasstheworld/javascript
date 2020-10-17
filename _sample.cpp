/********************************
 *   Author: harasstheworld
 *   Created: ? : ? : ?
 ********************************/


#include <bits/stdc++.h>

using namespace std;


template <typename T>
T myMax(T x, T y) {
  return x > y ? x : y;
}

template <class T>
void bubble_sort(T a[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = n - 1; j > i; j--) {
      if (a[j] < a[j - 1]) {
        swap(a[j], a[j - 1]);
      }
    }
  }
}

int main() {
  ios::sync_with_stdio(false);
  cin.tie(0);

  vector<string> msg {"Hello", "World"};

  for (const string& word : msg) {
    cout << word << ' ';
  }

  cout << '\n';

  return 0;
}


a = max(a, b);
a = a > b ? a : b;

vector<int> f(n);
for (int &x : a) {}
for (auto &x : a) {}
for (const auto &v : a) {}
cout << *max_element(f.begin(), f.end());



freeopen("LIS.inp", "r", stdin);
freeopen("SOL.out", "w", stdout);

Primary: Integer, Character, Boolean, Floating Point, Double Floating Point, Void, Wide Character

Derived: Function, Array, Pointer, Reference

User Defined: Class, Structure, Union, Enum, Typedef
