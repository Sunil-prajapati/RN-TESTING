All about testing 

  to build debug app 
commands==== 
npm test
to override snapshot ===
npm test -- -u


try to create same folder and files structure in __test__ folder as we have in src folder 



it and test are both same

=====JEST CONFIGURATION ======
go to jest config.js file
update preset
create file jest-setup.ts

mocking some library which were already tested
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')



empty mock filr for code will ont clash


after that please check coverage folder to get amazed 

add testId to e.g (TouchableOpacity) for reference in the test file


in case object equality we have to use toEqual


===== Detox for E2E testing ======
npx detox init
=== Android config =====
after this need native configuration 
we have to update the name od emulator/simulator in .detoxs.js file
make sure there is no space while pasting in the network_security_config file

npx detox build --configuration android.emu.debug
OR
cd android && ./gradlew app:assembleDebug app:assembleAndroidTest

artifacts folder created for the screenshot 