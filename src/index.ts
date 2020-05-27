import app from "./module";
import * as angular from "angular";

app.run([
  "$rootScope",
  $rootScope => {
    $rootScope.version = angular.version;
  }
]);
