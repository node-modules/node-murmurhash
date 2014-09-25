#include "nan.h"
#include "murmurhash.h"

#define MURMURHASH_M 0x5bd1e995

NAN_METHOD(MurmurHash2) {
  NanScope();

  if (args.Length() < 2) {
    NanThrowTypeError("Wrong number of arguments");
    NanReturnUndefined();
  }

  char *key = node::Buffer::Data(args[0]->ToObject());
  int len = node::Buffer::Length(args[0]->ToObject());
  uint32_t seed = args[1]->NumberValue();
  uint32_t h = seed ^ len;
  int index = 0;

  while (len >= 4) {
    uint32_t k = (key[index] & 0xff) | ((key[index + 1] << 8) & 0xff00)
      | ((key[index + 2] << 16) & 0xff0000)
      | (key[index + 3] << 24);

    k *= MURMURHASH_M;
    k ^= (k >> 24);
    k *= MURMURHASH_M;
    h *= MURMURHASH_M;
    h ^= k;
    index += 4;
    len -= 4;
  }

  switch (len) {
    case 3:
      h ^= (key[index + 2] << 16);

    case 2:
      h ^= (key[index + 1] << 8);

    case 1:
      h ^= key[index];
      h *= MURMURHASH_M;
  }

  h ^= (h >> 13);
  h *= MURMURHASH_M;
  h ^= (h >> 15);
  NanReturnValue(NanNew<v8::Number>(h));
}
