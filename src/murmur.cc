#include "nan.h"
#include "murmurhash.h"

void InitAll(v8::Handle<v8::Object> exports) {
  exports->Set(NanNew<v8::String>("v2"),
    NanNew<v8::FunctionTemplate>(MurmurHash2)->GetFunction());
}

NODE_MODULE(murmur, InitAll)
