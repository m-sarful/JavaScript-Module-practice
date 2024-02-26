// find ঃ একটি array এর মধ্যে যতগুলো উপাদান আছে তার সবাই যদি শর্ত পূরণ করে তাহলে সে প্রথম টাকে return করবে। সবগুলো উপাদান শর্ত পূরণ লরলেও প্রথমে যে শর্ত পূরণ করবে find শুধু  তাকেই return করবে বাকিগুলকে return করবেনা । আর যদি কোন উপাদানই শর্ত পূরণ না করে তাহলে undefined return করবে।


const players = [23, 21, 45, 12, 14, 13, 22];
const selected = players.find(player => player > 50);
console.log(selected);