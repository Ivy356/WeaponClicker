$scope.MoneyFormat = function (labelValue) 
                    {
                          // 18 Zeroes for Quintillions
                          return Math.abs(Number(labelValue)) >= 1.0e+18

                               ? Math.abs(Number(labelValue)) / 1.0e+18 + "quintillion"
    
                          // 15 Zeroes for Quadrillions
                          return Math.abs(Number(labelValue)) >= 1.0e+15

                               ? Math.abs(Number(labelValue)) / 1.0e+15 + "quadrillion"
                               // 12 Zeroes for Trillions
                               : Math.abs(Number(labelValue)) >= 1.0e+12

                               ? Math.abs(Number(labelValue)) / 1.0e+12 + "trillion"
                               // 9 Zeroes for Billions
                               : Math.abs(Number(labelValue)) >= 1.0e+9

                               ? Math.abs(Number(labelValue)) / 1.0e+9 + "billion"

                               : Math.abs(Number(labelValue));
                   }

  $scope.rep.won = $scope.MoneyFormat($scope.rep.won);
            $scope.outlook.rem = $scope.MoneyFormat($scope.outlook.rem);
            $scope.rep.expectedAmount = $scope.MoneyFormat($scope.rep.expectedAmount);
            $scope.rep.potential = $scope.MoneyFormat($scope.rep.potential);
            $scope.rep.quota = $scope.MoneyFormat($scope.rep.quota);
