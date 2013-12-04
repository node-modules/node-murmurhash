{
  "targets": [
    {
      "target_name": "murmur",
      "sources": [
        "src/murmur.cc",
        "src/murmurhash.cc",
      ],
      "include_dirs" : [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}