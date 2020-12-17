// Naming convention:

// UpperCamelCase
class MainScreen { ... }
enum MainItem { ... }
typedef Predicate<T> = bool Function(T value);
extension MyList<T> on List<T> { ... }

// snake_case(lowercase_with_underscores)
library firebase_dynamic_links;
import 'socket/socket_manager.dart';

// lowerCamelCase
var item;
const bookPrice = 3.14;
final urlScheme = RegExp('^[a-z]+):');
void sum(init bookPrice) {
  // ...
}


// Use relative imports for files in 'lib':

// Don't
import 'package:demo/src/utils/dialog_utils.dart';
// Do
import '../../../utils/dialog_utils.dart';

// Specify types for class member:

// Don't
var item = 10;
final car = Car();
const timeOut = 2000;
// Do
int item = 10;
final Car bar = Car();
String name = 'john';
const int timeOut = 20;

// Avoid using as instead, use is operator:


// Don't
Widget getText(BuildContext context) {
  return Row(
    children: [
      Text("Hello"),
      Platform.isAndroid ? Text("Android") : null,
      Platform.isAndroid ? Text("Android") : SizeBox(),
      Platform.isAndroid ? Text("Android") : Container(),
    ]
  );
}


// Do
Widget getText(BuildContext context) {
  return Row(
      children: 
      [
        Text("Hello"), 
        if (Platform.isAndroid) Text("Android")
      ]
  );
}

// Use ?? and ?. operators
// Use spread collections
// Use Cascades Operator
// Use raw string
// Don’t explicitly initialize variables null
// Use expression function bodies
// Avoid print() calls
// Split widget into different Widgets
// Use ListView.builder for a long list
// Use Const in Widgets
