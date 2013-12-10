#include <sys/types.h>
#include <node.h>
#include "nan.h"
#include "murmurhash.h"

using namespace v8;

void InitAll(Handle<Object> exports) {
  exports->Set(NanSymbol("v2"),
      FunctionTemplate::New(MurmurHash2)->GetFunction());
}

NODE_MODULE(murmur, InitAll)