import React from "react";
import MainLayout from "../../components/Layout/MainLayout";

const TestColors = () => {
  return (
    <MainLayout>
      <div className="flex gap-3">
        <div className="w-6">
          <div class="test1">#000000</div>
          <div class="test2">#0A0A0A</div>
          <div class="test3">#111111</div>
          <div class="test4">#1E1E1E</div>
          <div class="test5">#333333</div>
          <div class="test6">#2C2C2C</div>
          <div class="test7">#1A1A1A</div>
          <div class="test8">#262626</div>
          <div class="test9">#1F1F1F</div>
          <div class="test10">#121212</div>
        </div>
        <div className="w-6">
          <div class="test11">#EAEAEA (Light Gray)</div>
          <div class="test12">#F7F7F7 (Light Gray)</div>
          <div class="test13">#EBEBEB (Light Gray)</div>
          <div class="test14">#E5E5E5 (Light Gray)</div>
          <div class="test15">#EFEFEF (Light Gray)</div>
          <div class="test16">#FBFBFB (White)</div>
          <div class="test17">#F9F9F9 (White)</div>
          <div class="test18">#F4F4F4 (White Smoke)</div>
          <div class="test19">#F6F6F6 (White)</div>
          <div class="test20">#FFFFFF (White)</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TestColors;
